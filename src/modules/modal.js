import { generateId } from '../utils/generate-id.js';

function showModal({ message, callback }) {
	const modalNode = createModal();

	const modalBackdropNode = createModalBackdrop();
	modalNode.appendChild(modalBackdropNode);

	const modalContentNode = createModalContent(modalNode, { message, callback });
	modalNode.appendChild(modalContentNode);

	document.body.appendChild(modalNode);
}

function createModal() {
	const modalNode = document.createElement('div');
	modalNode.classList.add('modal');
	modalNode.id = `modal-${generateId()}`;

	return modalNode;
}

function createModalBackdrop() {
	const modalBackdrop = document.createElement('div');
	modalBackdrop.classList.add('modal__backdrop');
	return modalBackdrop;
}

function createModalContent(modalNode, { message, callback }) {
	const modalContentNode = document.createElement('div');
	modalContentNode.classList.add('modal__content');

	const modalContentMessageNode = document.createElement('p');
	modalContentMessageNode.classList.add('modal__content-message');
	modalContentMessageNode.textContent = message;

	const modalContentButtonContainerNode = document.createElement('div');
	modalContentButtonContainerNode.classList.add(
		'modal__content-button-container'
	);

	const yesButtonNode = document.createElement('button');
	yesButtonNode.classList.add(
		'modal__content-btn',
		'modal__content-btn--success'
	);
	yesButtonNode.textContent = 'Yes';
	yesButtonNode.addEventListener('click', () => {
		callback(true);
		removeModal(modalNode.id);
	});

	const cancelButtonNode = document.createElement('button');
	cancelButtonNode.classList.add(
		'modal__content-btn',
		'modal__content-btn--danger'
	);
	cancelButtonNode.textContent = 'Cancel';
	cancelButtonNode.addEventListener('click', () => {
		callback(false);
		removeModal(modalNode.id);
	});

	modalContentButtonContainerNode.append(yesButtonNode, cancelButtonNode);

	modalContentNode.append(
		modalContentMessageNode,
		modalContentButtonContainerNode
	);

	return modalContentNode;
}

function removeModal(id) {
	const modal = document.getElementById(id);
	if (modal) modal.remove();
}

export { showModal };
