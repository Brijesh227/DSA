package Java.Collection.Set;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import Java.Collection.List.Queue.StudentMarks;

/** 
 * 
 * Always override hashCode() and equals() method while using HashSet 
 * otherwise contains() method will not work properly for custom objects
 * 
 * -> HashSet implements Set interface
 * -> it converts the data into hashcode and store it in hash table
 * -> It does not maintain any order while storing the data
 * 
 * LinkedHashSet
 * -> it maintains the order of insertion
 * -> it is slower than HashSet
 * -> It is rarely used
*/

public class IHashSet {

    public static void main(String[] args) {

        Set<Integer> set = new HashSet<>();
        
        set.add(1);
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(4);
        set.add(5);
        // [1, 2, 3, 4, 5]  duplicate value will not be added

        // remove
        set.remove(1); // [2, 3, 4, 5]

        Set<Integer> set2 = new HashSet<>();
        set2.add(4);
        set2.add(5);
        set2.add(6);
        // [4, 5, 6]

        set.removeAll(set2); // [2, 3]
        System.out.println("RemoveAll: "+set);
        // union
        set.addAll(set2); // [2, 3, 4, 5, 6]
        System.out.println("Add all: "+set);

        // intersection
        set.retainAll(set2); // [4, 5]
        System.out.println("Retain all: "+set);
        
        List<StudentMarks> stMarks = new ArrayList<>();
        stMarks.add(new StudentMarks(10, 20));
        stMarks.add(new StudentMarks(20, 10));
        stMarks.add(new StudentMarks(40, 15));
        stMarks.add(new StudentMarks(30, 10));


        Set<StudentMarks> studentSet = new HashSet<>(stMarks);

        // contains
        studentSet.contains(new StudentMarks(20, 10)); 
        // above method will return false because
        // HashSet internally generate hashCode by Object reference, which will be unique for each object. To overcome this
        // we need to override hashCode and equals method in StudentMarks class
    }
}
