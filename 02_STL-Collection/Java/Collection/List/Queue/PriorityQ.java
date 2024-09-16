package Java.Collection.List.Queue;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

/*
 *  -> by default it implements MIN_HEAP
 *  -> internally it uses heap
 *  -> it is used to find kth largest or smallest element
 *  -> in case of other data type it will take comparator 
 *          to solve this we need to implement Comparable interface(in StudentMarks)
 */

public class PriorityQ {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();    // Integer by default implements Comparable interface
        pq.offer(2);
        pq.offer(20);
        pq.offer(10);
        pq.offer(5);
        
        System.out.println(pq.peek());    // 2 

        // get top 2 from priority queue (actually it will give min element)
        List<Integer> bottom2 = new ArrayList<>();

        int index = 0;
        while(index < 2) {
            bottom2.add(pq.poll());
            ++index;
        }

        System.out.println(bottom2);
        System.out.println(pq);

        /* get bottom 2 from priority queue (actually it will give max element)
        * we didn't get directly because Integer by default implements Comparable interface which implement compareTo method like min heap
        *   like:  public static int compareTo(int x, int y) {
        *                return (x < y) ? -1 : ((x == y) ? 0 : 1);
                    }

        * if we want to get max element then we need to implement Comparator interface
        */ 
        List<Integer> top2 = new ArrayList<>();
         
        // 1. solution
        PriorityQueue<Integer> pq2 = new PriorityQueue<>(Comparator.reverseOrder());
        pq2.offer(2);
        pq2.offer(20);
        pq2.offer(10);
        pq2.offer(5);


        // 2. solution

        PriorityQueue<Integer> pq3 = new PriorityQueue<>(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o2 - o1;
            }
        });
        pq3.offer(2);
        pq3.offer(20);
        pq3.offer(10);
        pq3.offer(5);

        // 3. solution (lambda)

        PriorityQueue<Integer> pq4 = new PriorityQueue<>((a,b) -> b-a);
        pq4.offer(2);
        pq4.offer(20);
        pq4.offer(10);
        pq4.offer(5);

        index = 0;
        while(index < 2) {
            top2.add(pq4.poll());
            ++index;
        }
        System.out.println(top2);


        // get me top 3 student acccording to math marks

        List<StudentMarks> stMarks = new ArrayList<>();
        stMarks.add(new StudentMarks(10, 20));
        stMarks.add(new StudentMarks(20, 10));
        stMarks.add(new StudentMarks(40, 15));
        stMarks.add(new StudentMarks(30, 10));

        PriorityQueue<StudentMarks> pq5 = new PriorityQueue<>(stMarks); // automatically add all student marks
        //pq5.offer(new StudentMarks(10, 20));                         // else we need to add all student marks like this

        List<StudentMarks> top3 = new ArrayList<>();

        int index2 = 0;
        while(index2 < 3) {
            top3.add(pq5.poll());
            ++index2;
        }

        System.out.println(top3);  
        /**
         * Exception in thread "main" java.lang.ClassCastException: 
         * class Java.Collection.List.Queue.StudentMarks cannot be cast to class java.lang.Comparable (Java.Collection.List.Queue.StudentMarks is in unnamed module of loader 'app'; 
         * java.lang.Comparable is in module java.base of loader 'bootstrap')
         */

         // to solve this we need to implement Comparable interface in StudentMarks class

         // 99% we use comparator because we don't have direct access to the base class in leetcode
    }
}
