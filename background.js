chrome.runtime.onInstalled.addListener(() => {
    const defaultSettings = {
        'cc-by-nc': {
            tag: `<p style="text-align: center;"><a href="https://ac-p1.namu.la/20230806sac/c5835002dc3622103ff692287516758eb6ac0ac30744c8aa3c0b0514f88e506e.png?expires=1728238354&key=grs7gSSRvPSbPXLqncOItA&type=orig" target="_blank" id="isPasted"><img src="https://ac-p1.namu.la/20230806sac/c5835002dc3622103ff692287516758eb6ac0ac30744c8aa3c0b0514f88e506e.png?expires=1728238354&key=grs7gSSRvPSbPXLqncOItA" style="max-width: 100%;" class="fr-fic fr-dii"></a></p>`,
            text: `<p style="text-align: center;"><strong>CC BY-NC 4.0 국제 라이선스 적용</strong><br>이 저작물은 <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.ko" target="_blank" rel="noopener noreferrer">크리에이티브 커먼즈 저작자표시-비영리 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.<br>이 저작물은 아카라이브 커뮤니티 - AI 채팅 채널을 위해 공개되었으며, AI 채팅 채널 외 타 채널 혹은 커뮤니티에 공유, 배포 등으로 이용할 때에는 반드시 원 저작자의 이름과 출처를 명시해야 합니다.<br>상업적 용도의 경우 어떠한 이유로도 이용할 수 없습니다.</p>`
        },
        'cc-by-nc-sa': {
            tag: `<p style="text-align: center;"><a href="https://ac-p1.namu.la/20230806sac/2748b095bd6a2e96b6283be8489fb931cfc7d0648807da77c6adc40b6aafdd75.png?expires=1728238354&key=ZaAgPSA2-ecLGfY0gfhKnA&type=orig" target="_blank" id="isPasted"><img src="https://ac-p1.namu.la/20230806sac/2748b095bd6a2e96b6283be8489fb931cfc7d0648807da77c6adc40b6aafdd75.png?expires=1728238354&key=ZaAgPSA2-ecLGfY0gfhKnA" style="max-width: 100%;" class="fr-fic fr-dii"></a></p>`,
            text: `<p style="text-align: center;"><strong>CC BY-NC-SA 4.0 국제 라이선스 적용</strong><br>이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko" target="_blank" rel="noopener noreferrer">크리에이티브 커먼즈 저작자표시-비영리-동일조건변경허락 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.<br>이 저작물은 아카라이브 커뮤니티 - AI 채팅 채널을 위해 공개되었으며, AI 채팅 채널 외 타 채널 혹은 커뮤니티에 공유, 배포 등으로 이용할 때에는 반드시 원 저작자의 이름과 출처를 명시해야 합니다.<br>상업적 용도의 경우 어떠한 이유로도 이용할 수 없습니다. 리믹스, 변형, 2차적 저작물을 작성하고 그 결과물을 공유할 경우에는 원 저작물과 동일한 조건의 CCL을 적용하여야 합니다.</p>`
        },
        'cc-by-nc-nd': {
            tag: `<p style="text-align: center;"><a href="https://ac-p1.namu.la/20230806sac/b942cfad37202ca048f566df8d1c50e031c84696ecd2f71a393b3d0764870372.png?expires=1728238354&key=QOqTe1-9i12z0KD-Kz0fBA&type=orig" target="_blank" id="isPasted"><img src="https://ac-p1.namu.la/20230806sac/b942cfad37202ca048f566df8d1c50e031c84696ecd2f71a393b3d0764870372.png?expires=1728238354&key=QOqTe1-9i12z0KD-Kz0fBA" style="max-width: 100%;" class="fr-fic fr-dii"></a></p>`,
            text: `<p style="text-align: center;"><strong>CC BY-NC-ND 4.0 국제 라이선스 적용</strong><br>이 저작물은 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ko" target="_blank" rel="noopener noreferrer">크리에이티브 커먼즈 저작자표시-비영리-변경금지 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.<br>이 저작물은 아카라이브 커뮤니티 - AI 채팅 채널을 위해 공개되었으며, AI 채팅 채널 외 타 채널 혹은 커뮤니티에 공유, 배포 등으로 이용할 때에는 반드시 원 저작자의 이름과 출처를 명시해야 합니다.<br>상업적 용도의 경우 어떠한 이유로도 이용할 수 없습니다. 리믹스, 변형하거나 2차적 저작물을 작성하였을 경우 그 결과물을 공유할 수 없습니다.</p>`
        }
    };

    chrome.storage.local.set({ 'defaultSettings': defaultSettings, ...defaultSettings }, () => {
        console.log('Default settings saved on install');
    });
    
    chrome.contextMenus.create({
        id: "cc-by-nc",
        title: "CC BY-NC (출처 명시 O / 상업적 이용 X / 내용 수정 & 2차 창작 O)",
        contexts: ["editable"]
    });

    chrome.contextMenus.create({
        id: "cc-by-nc-sa",
        title: "CC BY-NC-SA (출처 명시 O / 상업적 이용 X / CC 동일조건 O)",
        contexts: ["editable"]
    });

    chrome.contextMenus.create({
        id: "cc-by-nc-nd",
        title: "CC BY-NC-ND (출처 명시 O / 상업적 이용 X / 내용 수정 & 2차 창작 X)",
        contexts: ["editable"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.storage.local.get([info.menuItemId], (result) => {
        if (result[info.menuItemId]) {
            const { tag, text } = result[info.menuItemId];
            const topHr = `<hr>`;
            const bottomHr = `<hr>`;
            const fullContent = topHr + tag + text + bottomHr;

            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: insertContentIntoEditor,
                args: [fullContent]
            });
        } else {
            console.error('License data not found');
        }
    });
});

function insertContentIntoEditor(content) {
    const activeElement = document.activeElement;
    if (activeElement.isContentEditable) {
        document.execCommand('insertHTML', false, content);
    } else {
        alert("WYSIWYG 에디터에서만 사용 가능합니다.");
    }
}