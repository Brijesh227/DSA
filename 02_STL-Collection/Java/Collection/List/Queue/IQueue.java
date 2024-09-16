/**
 * stack use stack class
 * queue use Linklist class
 * double ended queue use ArrayDeque class
 */

package Java.Collection.List.Queue;

import java.util.*;
public interface IQueue<T> extends Queue<T> {
    boolean add(T item);
    boolean offer(T item);  // prefer because does not throw exception
    T remove();
    T poll();    // prefer because does not throw exception
    T element();
    T peek();     // prefer because does not throw exception
}

class Impl{

    // Stack implementation
    Stack<Integer> stack = new Stack<>(); // prefered 
    Queue<Integer> stack2 = new ArrayDeque<>();
    // stack2.offerLast();
    // stack2.pollLast();

    // Queue implementation
    Queue<Integer> queue = new LinkedList<>();
    // queue.offerLast();
    // queue.pollFirst();

    // double ended queue
    Queue<Integer> deque = new ArrayDeque<>();
}