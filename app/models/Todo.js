export default function TodoModel(mongoose){
    mongoose.model('todo',
        mongoose.Schema(
            {task: String,
                task: String, 
                completed: String
            }, {timestamps: true}
        )
    )
}
