import { showModal } from './modules/modal.js';

const buttonNode = document.querySelector(
	'.js-confirmation-dialog-message-btn'
);
const messageNode = document.querySelector('.js-confirmation-dialog-message');

buttonNode.addEventListener('click', () => {
	showModal({
		message: 'Are you sure you want to continue?',
		callback: (isConfirmed) => {
			const message = `You just clicked "${isConfirmed ? 'Yes' : 'Cancel'}"`;

			messageNode.textContent = message;
		},
	});
});
