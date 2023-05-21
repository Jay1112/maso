class AppStyle {
    mainBox = {
        textAlign:"center",
        fontSize:"xl",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
    innerBox = {
        minWidth:'300px',
        maxWidth:'600px',
        width:'95%',
        height:'99vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'column',
        padding:'0.25rem 0.25rem'
    }
}

export const appStyleObj = new AppStyle();