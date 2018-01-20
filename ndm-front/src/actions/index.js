
export const actionTypes = {
    DETAIL_REQUEST: "@ndm/UI/countries/DETAIL_REQUEST",
}

export const showDetail = (id) => {
    return {
        type: actionTypes.DETAIL_REQUEST,
        id: id
    }
}
