export default {
	data () {
		return getContactStatuses.data.map(({ id, contactstatusname }) => ({
				code: id,
				name: contactstatusname
		}));
	}
}