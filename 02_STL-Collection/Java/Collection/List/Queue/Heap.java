package Java.Collection.List.Queue;

/**
 * To insert or delete in heap O(logn)
 *      -> it will take max (log n) swap that's why complexity on O(logn)
 *      -> always insert at last and then construct heap
 *      -> in case of delete, first delete root node and then construct heap by
 *           swaping right most element of lowest level
 *              e.g., delete 35 and put 45 as a root
 * 
 *             35
            /      \
           24       25
          /   \    /  \
         9     6   5   10
        /
       45 
 * 
 * 
 * Heap construct have two methods:
 * 
 *  1. insert one by one:  O(n logn)
 *     -> insert at specific index O(1)
 *     -> to insert in proper position O(logn) ( first compare(logn) and then swap(logn))
 *             35
            /      \
           24       25
          /   \    /  \
         9     6   5   10
        /
       45                        // 45 compare with 9 and swap
                                 // 45 compare with 24 and swap  
                                 // 45 compare with 35 and swap 

        -> suppose i have n elements in array then for one -> logn for n = nlogn
 * 
 *  2. heapify: O(n)
 *    -> heapify is used to create heap from array
 *    -> visualize array as tree
 *       [145, 40, 25, 65, 12, 48, 18, 1, 100, 27, 7, 3, 45, 9, 30]
 *    -> healpify said that leaf node do not need to be checked(because algorithm say that)
 *    -> start with first non-leaf node it is always (n/2)
 *             145
            /       \
           40         25
          /   \      /  \
         65    12    48   18
       /  \   /  \  / \  / \
      1   100 27 7  3 45 9  30
      -> compare with left and right child and swap with max of left and right child
 * 
 */

// 1. insert one by one = O(n logn)
public class Heap {
    // Input: arr[] = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17}
    // Output: Corresponding Max-Heap:

    //                  17
    //               /      \
    //           15         13
    //          /    \      /  \
    //       9      6    5   10
    //      / \    /  \
    //   4   8  3    1
    public static void swap(int[] arr, int i, int j) {
        arr[i] = (arr[i] + arr[j]) - (arr[j] = arr[i]);
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17};
        int[] mh = new int[arr.length+1];
        for(int i=0;i<arr.length;++i) {
            int currIdx = i+1;
            int root = (currIdx/2);
            mh[currIdx] = arr[i];
            while(root >= 1 && mh[root] < mh[currIdx]){
                swap(mh,root,currIdx);
                currIdx = root;
                root = (root/2);
            }
        }
        for(int i:mh){
            System.out.println("after "+i);   
        }
    }
}
