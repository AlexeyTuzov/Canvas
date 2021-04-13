export const store = {
    State4Header: [
        {type: 'Header', value: `Hello, World!`}
    ],
    State4Sidebar: [
        {type: 'Sidebar', id: 1, value: `First`},
        {type: 'Sidebar', id: 2, value: `Second`},
        {type: 'Sidebar', id: 3, value: `Third`},
        {type: 'Sidebar', id: 3, value: `Fourth`}
    ],
    State4Content: [
        {type: 'Content', value: `Lorem ipsum dolor sit amet...`}
    ],
    State4Footer: [
        {type: 'Footer', value: `Alex Studio. Web Design since 2021`}
    ],
    DemoInfo: [
        '1111111',
        '2222222',
        '3333333'
    ],
    getState () {return store;}

};
