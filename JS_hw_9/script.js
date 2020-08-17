let ToDoList = function() {
    let listBody = document.createElement('div');
    listBody.classList.add('list-body');
    document.body.appendChild(listBody);

    let listHeader = document.createElement('div');
    listHeader.classList.add('list-header');
    listHeader.innerHTML = 'Список задач';
    listBody.appendChild(listHeader);

    let listInput = document.createElement('input');
    listInput.classList.add('list-input');
    listInput.setAttribute('placeholder', "Введите Вашу задачу");
    listBody.appendChild(listInput);
  
    this.createTask = function() {
            listInput.addEventListener('keydown', function(event) {
                if (event.code == 'Enter' && listInput.value != '') {
                    let taskBody = document.createElement('div');
                    taskBody.classList.add('task-body');
                    listBody.appendChild(taskBody);
                    let taskCheckbox = document.createElement('div');
                    taskCheckbox.classList.add('checkbox');
                    taskBody.appendChild(taskCheckbox);
                    let taskName = document.createElement('div');
                    taskName.classList.add('task-name');
                    taskName.innerHTML = event.target.value;
                    taskBody.appendChild(taskName);
                    listInput.value = '';

                    if(listBody.querySelectorAll('.task-body').length <=1) {
                        deleteTasks = document.createElement('button');
                        deleteTasks.classList.add('delete-tasks');
                        deleteTasks.innerHTML = 'Удалить все задачи';
                        listBody.insertBefore(deleteTasks, listBody.querySelector('.task-body') );
                        }

                    taskCheckbox.addEventListener('click', function() {
                        this.classList.toggle('checked');
                        taskName.classList.toggle('crossed');
                        taskBody.classList.toggle('done');
                    });                 
                } 
                                
                deleteTasks.addEventListener('click', function() {
                    let array = listBody.querySelectorAll('.task-body');
                    for(let i = 0; i < array.length; i++) {
                            array[i].remove();
                        }
                    deleteTasks.remove();
                });
                
            });
               
    };





};


let toDoList = new ToDoList();
toDoList.createTask();


