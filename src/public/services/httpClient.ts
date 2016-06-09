import $ from "jquery";

export default class HttpClient {
    static get<T>(url: string) {
        return new Promise<T>((resolve, reject) => {
            $.ajax(url, {
                accepts: "json",
                method: "GET",
                success: (data) => {
                    resolve(data);
                },
                error: function (xhr, status, error) {
                    reject(error);
                }
            });
        });
    }

    static post<T>(url: string, data?: T) {
        return new Promise<T>((resolve, reject) => {
            $.ajax(url, {
                accepts: "json",
                method: "POST",
                data: data,
                success: (data) => {
                    resolve(data);
                },
                error: function (xhr, status, error) {
                    reject(error);
                }
            });
        });
    }

    static put<T>(url: string, data?: T) {
        return new Promise<T>((resolve, reject) => {
            $.ajax(url, {
                accepts: "json",
                method: "PUT",
                data: data,
                success: (data) => {
                    resolve(data);
                },
                error: function (xhr, status, error) {
                    reject(error);
                }
            });
        });
    }

    static delete<T>(url: string) {
        return new Promise<T>((resolve, reject) => {
            $.ajax(url, {
                method: "DELETE",
                success: (data) => {
                    resolve(data);
                },
                error: function (xhr, status, error) {
                    reject(error);
                }
            });
        });
    }
}