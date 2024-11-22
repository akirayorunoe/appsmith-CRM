export default {
	createContactConfirmBtnonClick () {
		const contact = {
			lookupcode: lookupCodeTxt.text,
			email: emailTxt.text,
			phonenumber: hotlineTxt.text,
			contactowner: contactOwnerTxt.text,
			primarycompany: companyNameTxt.text,
			contactstatusid: contactStatusSelect.selectedOptionValue,
			refferer: reffererTxt.text,
			note: noteTxt.text,
		}
		addNewContactSQL.run({...contact}).then((data) => {
			if(data[0]?.affectedRows === 1) {
				showAlert("Thêm liên hệ thành công!", "success")
				closeModal(createContactModal.name)
				getContacts.run()
			}
		}).catch((err) => {
			showAlert("Thêm liên hệ thất bại!", "error")
		})
	}
}