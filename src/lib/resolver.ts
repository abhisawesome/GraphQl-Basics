let authorList = [{ id: 1, name: 'Author 1' }, { id: 2, name: 'Author 2' }];

interface paramModel {
    id: Number,
    name?: String
}
export default {
    getAllAuthors: () => {
        return authorList
    },
    getAuthorWithId: (params: paramModel) => {
        const { id } = params;
        return authorList.find((value) => {
            return value.id === params.id;
        })
    },
    insertAuthor: (params: any) => {
        authorList.push(params);
        return authorList;
    }
}