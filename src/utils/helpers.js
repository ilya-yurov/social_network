export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
	return items.map(u => {
		if (u[objPropName] === itemId) {
			return { ...u, ...newObjProps};
		} else {
			return u
		}
	})
}

export const pageSlicer = (totalUsersCount, pageSize, currentPage) => {
	let pagesCount = Math.ceil(totalUsersCount/pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	let curP = currentPage;
	return pages.slice(curP<4?0:curP-4,curP<4?7:curP+3);
}