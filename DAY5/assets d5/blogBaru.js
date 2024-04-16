const dataProject = []

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById('project-name').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let content = document.getElementById('description').value;
    let technologies = document.getElementsByClassName('tech');
    let image = document.getElementById('image').values;

    if (title === "") {
        return alert("Please fill in the project name")
    } else if (startDate === "") {
        return alert("Please fill the date")
    } else if (endDate === "") {
        return alert("Please fill the date")
    } else if (content === "") {
        return alert("Please fill the content description")
    } else if (image === "") {
        return alert("Please insert the image")
    }

    if (startDate > endDate) {
        return alert("The end date cannot be less than the start date")
    }

    var techStack = []
    for (var i = 0; i < technologies.length; i++) {
        var tech = technologies[i];

        if (tech.checked) {
            techStack.push(tech.id)
        }
    }

    dataProject.push({
        title: title,
        startdate: startDate,
        enddate: endDate,
        content: content,
        techStack: techStack,
        image: image,
        duration: duration
    })

    console.log(dataProject);

}

