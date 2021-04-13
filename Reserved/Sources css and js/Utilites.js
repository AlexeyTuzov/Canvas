const $App = document.querySelector('#root');

export function CreateGridElement(object, className) {
    return `<div class=${className}>${object}</div>`;

}
export function RenderHTML(toHtml) {
    $App.insertAdjacentHTML('beforeend', toHtml);
}