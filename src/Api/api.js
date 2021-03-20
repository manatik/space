import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider
} from 'react-query'
const queryClient = new QueryClient()


export const sendDataFromRegistrationModal = async (data) => {
    console.log(data)
    await fetch('http://127.0.0.1:9000/dataUsersFromModalReg', {
        mode: 'cors',
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }),
    })
        .then(response => response)

}

export const sendDataFromLoginModal = async (data) => {
    await fetch('http://127.0.0.1:9000/dataUsersFromModalLogin', {
        mode: 'cors',
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }),
    })
        .then(response => response)
}
