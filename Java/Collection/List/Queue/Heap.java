package Java.Collection.List.Queue;

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
            int root = (i/2);
            int currIdx = i+1;
            mh[currIdx] = arr[i];
            while(mh[root] < mh[currIdx]){
                System.out.println("curr root: "+mh[currIdx] + " " + mh[root]); 
                swap(mh,root,currIdx);
                currIdx = root;
                root = (root/2)+1;
            }
        }
        for(int i:mh){
            System.out.println("after "+i);   
        }
    }
}
