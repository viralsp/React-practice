context 

    usercontext    and     provider 2 are needed

        usercontext  only used to create context 

        Provider store global values and pass them as paramener whereever req like children

Login 

    setUser ko call from context provider 

    and send data to setUser

    to store data use {setUser}

Profile 

    access the use data with help of user context

    to access data use only {user}

App 

    first call UsrContextProvider     and     inside that   normal  components