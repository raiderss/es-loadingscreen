local isLoaded = false

Citizen.CreateThread(function()
    SendNUIMessage({
        eventName = "startInitFunctionOrder",
        data = {
            total = 100
        }
    })

    while not NetworkIsSessionStarted() do
        SendNUIMessage({
            eventName = "initFunctionInvoking",
            data = {
                idx = 1,
                count = 100,
                name = "Connecting to server..."
            }
        })
        Citizen.Wait(500)
    end
    
    Citizen.Wait(500)
    
    if not isLoaded then
        isLoaded = true
        DoScreenFadeOut(0)
        ShutdownLoadingScreen()
        ShutdownLoadingScreenNui()
        Citizen.Wait(1000)
        DoScreenFadeIn(1000)
        
        SendNUIMessage({
            eventName = "closeLoadingScreen"
        })
    end
end)

AddEventHandler('playerSpawned', function()
    if not isLoaded then
        isLoaded = true
        ShutdownLoadingScreen()
        ShutdownLoadingScreenNui()
        
        SendNUIMessage({
            eventName = "closeLoadingScreen"
        })
    end
end)