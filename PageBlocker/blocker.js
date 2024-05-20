function verificarURLBloqueada() {
    chrome.storage.local.get("Save", function(result) {
        var savedData = result.Save || {};
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            var currentUrl = tabs[0].url;
            // Verifica se a URL da página atual corresponde a uma URL salva
            Object.values(savedData).forEach(function(item) {
                if (item.url === currentUrl) {
                    chrome.tabs.remove(tabs[0].id);
                    alert("Página bloqueada!");
                }
            });
        });
    });
}

// Executa a função de verificação sempre que uma nova aba for ativada
chrome.tabs.onActivated.addListener(verificarURLBloqueada);

// Executa a função de verificação sempre que uma nova página for carregada
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    verificarURLBloqueada();
});