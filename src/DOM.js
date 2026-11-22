export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.appendChild(element);
    }
}

export function generateTree(childrenCount, level) {
    function createNode(depth) {
        const element = document.createElement('div');
        element.className = `item_${depth}`;

        if (depth < level) {
            for (let i = 0; i < childrenCount; i++) {
                const child = createNode(depth + 1);
                element.appendChild(child);
            }
        }

        return element;
    }

    return createNode(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodes = tree.querySelectorAll('.item_2');

    nodes.forEach((node) => {
        const section = document.createElement('section');
        section.className = node.className;
        section.innerHTML = node.innerHTML;
        node.replaceWith(section);
    });

    return tree;
}
