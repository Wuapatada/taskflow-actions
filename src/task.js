function createTask(title, priority = "normal") {
    return {
        title: title,
        completed: false,
        priority: priority
    };
}

module.exports = {
    createTask
};