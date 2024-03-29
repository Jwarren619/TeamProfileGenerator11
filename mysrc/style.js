module.exports = () => {
    return `
    body {
        margin: 0px;
    }}
    
    header {
        background-color: rgb(28, 210, 92);
        color: white;
        height: 7rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 4rem 5rem;
    }
    
   
    
    #card-header {
        padding: 1rem;
        background: rgb(50, 139, 228);
        color: white;
    }

     #employee-card {
        margin: 1rem;
        width: 13rem;
        min-width: 13rem;
        border: solid 1px grey;
        border-radius: 0.25rem;
        box-shadow: 5px 5px 5px grey;
    }
    #employee-name {
        margin: 0;
    }
    
  
    
    #image {
        margin: 0 1rem 0 0;
        max-height: 1.5rem;
    }

      #employee-role {
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        
    }
    #role {
        margin: 0;
    }
    
   
    
    #card-info p {
        margin: 0;
        border: solid 1px grey;
        padding: .5rem;
    }
    
    #card-info {
        margin: 2rem 1rem;
    }
         `
 }
