interface HabitProps{
    completed: number
}
function Habit(props: HabitProps){
    return(
        <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 text-center flex items-center">  
            {props.completed}
        </div>
    )
       
    
}

export default Habit;