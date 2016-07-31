class Task < ActiveRecord::Base
    #enum status: { todo: 0, doing: 1, done: 2}
    #belongs_to :parent_task, class_name: 'Task'
    #has_many :tasks
    validates :content, presence: true
    
    def getActualHour
        diff_sec = self.end_task.to_time - self.start_task.to_time
        diff_date = Time.at(diff_sec)
        actual_hour =  (diff_date.day-1)*24 + diff_date.hour + diff_date.min / 60.0
        
        return actual_hour.round(2)
    end
end
