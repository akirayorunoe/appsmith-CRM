export default {
	getCurrentContact () {
		return getContactById.run({contactId: appsmith.store.contactId}).then((data) => {
			showModal(adjustContactModal.name)
			console.log(data[0])
			return data[0]
		})
	},
	saveAdjustedContact () {
		const contact = {
			lookupcode: lookupCodeAdjustTxt.text,
			email: emailAdjustTxt.text,
			phonenumber: hotlineAdjustTxt.text,
			contactowner: contactOwnerAdjustTxt.text,
			primarycompany: companyNameAdjustTxt.text,
			contactstatusid: contactStatusAdjustSelect.selectedOptionValue,
			refferer: reffererAdjustTxt.text,
			note: noteAdjustTxt.text,
			contactId: appsmith.store.contactId
		}
		updateContactById.run({...contact}).then((data) => {
			if(data[0]?.affectedRows === 1) {
				showAlert("Chỉnh sửa liên hệ thành công!", "success")
				closeModal(adjustContactModal.name)
				clearStore("contactId")
			} else {
				showAlert("Chỉnh sửa liên hệ thất bại!", "error")
			}
		}).catch((err) => {
			showAlert("Chỉnh sửa liên hệ thất bại!", "error")
		})
	}
}