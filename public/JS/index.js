$(document).ready(() => {
    $("#login").click(() => { //signIn
        alsert("hi");
        if (uname.value.trim() == "" || pwd.value.trim() == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter details',
            });
            uname.style.border = uname.value.trim() == "" ? "2px solid red" : '';
            pwd.style.border = pwd.value.trim() == "" ? "2px solid red" : '';

            return false;
        }


        else {
            let user = {
                username: uname.value.trim(),
                password: pwd.value.trim()
            }
            $.ajax({
                type: "POST",
                url: '/login',
                data: user,
                // dataType: 'json',

                success: function (response) {
                    if (response.status) {
                        location.replace("/")
                    } else {
                        Swal.fire(
                            'Warning!!',
                            'User not found!',
                            'error'
                        )
                    }
                },
                error: function (e) {
                    console.log("ERROR: ", e);
                }
            });

        }


    });
 

});