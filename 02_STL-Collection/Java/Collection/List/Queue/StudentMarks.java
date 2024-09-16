package Java.Collection.List.Queue;

public class StudentMarks implements Comparable<StudentMarks> {
    private int math;
    private int physics;

    public StudentMarks(int math, int physics) {
        this.math = math;
        this.physics = physics;
    }

    public int getMath() {
        return math;
    }

    public int getPhysics() {
        return physics;
    }

    @Override
    public String toString() {
        return "StudentMarks [math=" + math + ", physics=" + physics + "]";
    }

    // only when we want to use in PriorityQueue
    @Override
    public int compareTo(StudentMarks o) {
        return o.math - this.math;
    }


    // only when we want to generate hashcode whike storing in hashset 
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + math;
        result = prime * result + physics;
        return result;
    }


    // only when we want to use in HashSet to compare and check if it is already present in set
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        StudentMarks other = (StudentMarks) obj;
        if (math != other.math)
            return false;
        if (physics != other.physics)
            return false;
        return true;
    }
}
