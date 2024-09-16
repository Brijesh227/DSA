package Java.Collection.List.Queue;

// 2. heapify = (O(n))
// Input: arr[] = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17}
    //             1
    //         /       \
    //        3        5
    //      /   \      /  \
    //     4     6    13   10
    //   /  \   /  \ 
    //  9    8  15 17

public class Heapify {
    public static void swap(int[] arr, int i, int j) {
        arr[i] = (arr[i] + arr[j]) - (arr[j] = arr[i]);
    }

    public static void heapify(int arr[],int index, int n) {
        int largest = index;
        int left = 2 * index + 1;
        int right = 2 * index + 2;

        if(left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if(right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if(largest != index){
            swap(arr, largest, index);
            heapify(arr,largest,n);
        }
    }
    public static void main(String[] args) {
        int[] arr = { 1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17 };
        int n = arr.length;

        for(int i = (n/2) - 1 ; i >= 0; --i) {
            heapify(arr,i,n);
        }
        
        for(int i: arr) {
            System.out.println("after "+i);      
        }
    }
}

//               17
//            /      \
//           15       13
//         /    \    /  \
//       9      6    5   10
//      / \    / 
//     4   8  3  1
