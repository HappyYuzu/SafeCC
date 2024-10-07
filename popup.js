document.addEventListener('DOMContentLoaded', () => {
    const licenseTypes = ['cc-by-nc', 'cc-by-nc-sa', 'cc-by-nc-nd'];
    const elements = {};

    licenseTypes.forEach(type => {
        elements[type] = {
            container: document.getElementById(type),
            tag: document.getElementById(`${type}-tag`),
            text: document.getElementById(`${type}-text`),
            resetButton: document.querySelector(`[data-license="${type}"]`)
        };

        elements[type].container.querySelector('.license-header').addEventListener('click', () => {
            elements[type].container.querySelector('.license-content').classList.toggle('active');
        });
    });

    loadData();

    function loadData() {
        chrome.storage.local.get(licenseTypes, (result) => {
            chrome.storage.local.get('defaultSettings', (defaults) => {
                licenseTypes.forEach(type => {
                    if (result[type]) {
                        elements[type].tag.value = result[type].tag || '';
                        elements[type].text.value = result[type].text || '';
                    } else if (defaults.defaultSettings) {
                        elements[type].tag.value = defaults.defaultSettings[type].tag;
                        elements[type].text.value = defaults.defaultSettings[type].text;
                    }
                });
            });
        });
    }

    licenseTypes.forEach(type => {
        ['tag', 'text'].forEach(field => {
            elements[type][field].addEventListener('input', () => {
                saveData(type);
            });
        });
    });

    function saveData(type) {
        const data = {
            [type]: {
                tag: elements[type].tag.value,
                text: elements[type].text.value
            }
        };
        chrome.storage.local.set(data, () => {
            console.log(`${type} data saved`);
        });
    }

    licenseTypes.forEach(type => {
        elements[type].resetButton.addEventListener('click', () => {
            resetLicense(type);
        });
    });

    function resetLicense(type) {
        chrome.storage.local.get('defaultSettings', (defaults) => {
            if (defaults.defaultSettings && defaults.defaultSettings[type]) {
                elements[type].tag.value = defaults.defaultSettings[type].tag;
                elements[type].text.value = defaults.defaultSettings[type].text;
                saveData(type);
            } else {
                console.error('Default settings not found for', type);
            }
        });
    }

    const globalResetButton = document.getElementById('global-reset');
    globalResetButton.addEventListener('click', () => {
        licenseTypes.forEach(resetLicense);
    });
});
