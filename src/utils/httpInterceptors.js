import httpClient from "./httpclient";
const actionScope = `loader`;
export function setupInterceptors({ dispatch }) {
    let requestsPending = 0;
    const req = {
        pending: () => {
            requestsPending++;
            dispatch(`show`);
        },
        done: () => {
            requestsPending--;
            if (requestsPending <= 0) {
                dispatch(`hide`);
            }
        }
    };
    httpClient.interceptors.request.use(
        config => {
            req.pending();
            return config;
        },
        error => {
            requestsPending--;
            req.done();
            return Promise.reject(error);
        }
    );
    httpClient.interceptors.response.use(
        ({ data }) => {
            req.done();
            return Promise.resolve(data);
        },
        error => {
            req.done();
            return Promise.reject(error);
        }
    );
}