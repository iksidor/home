jQuery(document).ready(
    function(){
        //console.log('blabla');

        var user = jsHue().bridge('192.168.178.36').user('qt37YDwwAFuP7WjtpA1dFmCA6PejQSNYfloaoyTA');

        jQuery('.iris').on('click', ()=>{
            user.getLight(6).then(lightConfig => {
               user.setLightState(6, {on: !lightConfig.state.on});
            });
        });
    }

    
)