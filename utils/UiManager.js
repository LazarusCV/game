class UiManager {
    displayMainMenu() {
        add([sprite("forest-background"),
        scale(4)
        ])
        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y-200),
            scale(8)
        ])
    }
}

export const uiManager = new UiManager()