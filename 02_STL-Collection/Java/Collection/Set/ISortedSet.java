package Java.Collection.Set;

import java.util.SortedSet;
import java.util.TreeSet;

public class ISortedSet {
    public static void main(String[] args) {
        SortedSet<Integer> sortedSet = new TreeSet<>();
        sortedSet.add(4);
        sortedSet.add(2);
        sortedSet.add(6);

        // [2, 4, 6]
        }
}
