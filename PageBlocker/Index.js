document.addEventListener("DOMContentLoaded", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        var url = currentTab.url;
        var butt = document.getElementById("addPage")


        document.getElementById("address").innerText = url


        function elementRenderer(paginas){
            var listaDePaginas = document.getElementById("addressList");

            listaDePaginas.innerHTML = ""

            Object.keys(paginas).forEach(function(id) {
            var pagina = paginas[id];
            var li = document.createElement("li");
            li.textContent = pagina.pageName + "  ";

            var del = document.createElement("button");
            del.textContent = " --- "; 
            del.setAttribute("data-id", id);
            del.addEventListener("click", function() {
                var itemId = this.getAttribute("data-id");
                deleteItem(itemId);
            });

            li.appendChild(del)
            listaDePaginas.appendChild(li);
            });
        }

         function deleteItem(itemId) {
        chrome.storage.local.get("Save", function(result) {
            var savedData = result.Save || {};
            if (savedData[itemId]) {
                delete savedData[itemId];
                chrome.storage.local.set({ "Save": savedData });
                elementRenderer(savedData);
                }
            })
        }


        chrome.storage.local.get("Save", function(result) {
            var dadosSalvos = result.Save;
            if (dadosSalvos) {
              elementRenderer(dadosSalvos);
            } 
          });


        butt.addEventListener("click", function(event){
            var name = document.getElementById("name").value
            if (name && url) {
                var data = { "pageName": name, "url": url };
                var jsonData = JSON.stringify(data);
                chrome.storage.local.get("Save", function(result) {
                    var savedData = result.Save || {};

                    var pageExists = Object.values(savedData).some(function(item) {
                        return item.url === url;
                    });

                    if (pageExists) {
                        alert("Essa página já está na lista.");
                    } 

                    else {
                    var novoId = Object.keys(savedData).length + 1;
                    savedData[novoId] = data;
                    chrome.storage.local.set({ "Save": savedData });
                    elementRenderer(savedData)
                }});
                name.value = "";
            } 
            else {
                    alert("Por favor, coloque o nome da página!");
                };
            }

        )

    })})