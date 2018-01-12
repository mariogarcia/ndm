
export const editCountry = (id) => {
    return {
        type: 'COUNTRY_DETAIL',
        id: id
    }
}

export const deleteCountry = (id) => {
    return {
        type: 'COUNTRY_DELETE',
        id: id
    }
}
