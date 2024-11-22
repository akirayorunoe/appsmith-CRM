export default {
	contactsTableprimaryColumnscustomColumn2onClick () {
		deleteContactById.run({contactId: appsmith.store.contactId}).then((data) => {
			if(data[0]?.affectedRows === 1) {
				showAlert("Xóa liên hệ thánh công", "success")
				getContacts.run()
				clearStore('contactId')
				closeModal(deleteContactModal.name)
			} else {
				showAlert("Xóa liên hệ thất bại!", "error")
			}
		}).catch((err) => {showAlert("Xóa liên hệ thất bại!", "error")})
	}
}