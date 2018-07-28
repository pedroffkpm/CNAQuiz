import jquery from 'jquery'

export default async function subscribeToNewsletter(email) {
    const data = {
        EMAIL: email,
    };
    console.log(process.env);

    jquery.ajax(
            {
                url: `https://eaiviajante.us18.list-manage.com/subscribe/post-json?u=825b9b7c924a9c0d4528fe92c&amp;id=3e972f9aa9&c=?`,
                type: 'GET',
                data: data,
                dataType: 'jsonp',
                contentType: "application/json; charset=utf-8",
                success: (data) => {
                    if (data['result'] != "success") {
                        //ERROR
                        throw new Error(data['msg']);
                   } else {
                        return data;
                   }
                }
    });
}