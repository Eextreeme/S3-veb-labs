const BASE_URL = 'http://127.0.0.1:5000/api';
const RESOURSE_URL = `${BASE_URL}/cars`;

const baseRequest =  async ({urlPath = "", method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {

    }
}

//GET
export const getAllCars = async () => {
    const rawRes = await baseRequest({method: 'GET', mode: 'cors'});
    return rawRes.json();
}

//POST
export const postCars = (body) =>
    baseRequest({method: 'POST', body, mode: 'cors'});

//PUT
export const updateCars = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body, mode : 'cors' });

//DELETE
export const deleteCars= (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE"});
