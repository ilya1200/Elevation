class APIManager {
    constructor(route) {
        this.route = route
        this.data = {}
    }

    fetch() {
        $.get(this.route, function (response) {
            this.data = response
        })
    }
}

class Renderer {
    construcor(scriptID, containerID, apiManager) {
        this.scriptID = scriptID
        this.containerID = containerID
        this.apiManager = apiManager
    }

    render() {
        let source = $("#" + this.scriptID).html()
        let template = Handlebars.compile(source)
        $("#" + this.containerID).append(template(this.apiManager.data))
    }
}

const foodApi = new APIManager("/foodRoute")
const renderer = new Renderer("food-template", "container", foodApi)

foodApi.fetch()
// renderer.render()
