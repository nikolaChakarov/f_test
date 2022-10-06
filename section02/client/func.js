export async function fetchGreeting() {
    
    const url = 'http://localhost:9000/';

    const res = await (await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `
        })
    })).json();

    return res;
}