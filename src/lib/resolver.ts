const authorList = [{ id: 1, name: 'Author 1' }, { id: 2, name: 'Author 2' }]

interface paramModel {
    id: Number
}
export default {
    getAllAuthors: () => {
        return authorList
    },
    getAuthorWithId: (params:paramModel) => {
        console.log(params)
        const { id } = params;
        return authorList.find((value) => {
            return value.id === params.id;
        })
    }
}