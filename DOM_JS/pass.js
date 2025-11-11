function find_edit(){
    const name_node=document.getElementById('name')
    name_node.innerHTML=" Tayana";

    const surname_node=document.getElementById('surname')
    surname_node.innerHTML=" Troyakova";

}

const node_for_click=document.getElementById("change")
node_for_click.addEventListener("click",find_edit)