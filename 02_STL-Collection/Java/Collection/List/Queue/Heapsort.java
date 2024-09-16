package Java.Collection.List.Queue;

public class Heapsort {
    public static void main(String[] args) {
        int[] arr = { 1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17 };
        int n = arr.length;

        for(int i = (n/2) - 1 ; i >= 0; --i) {                // n
            Heapify.heapify(arr,i,n);
        }
        int[] sortArr = new int[arr.length];
        int i = 0;
        while(i < sortArr.length){                          // n logn (n element and logn delete)
            sortArr[i] = arr[0];
            Heapify.swap(arr, 0, n-i-1);
            Heapify.heapify(arr,0,n-i-2);
            ++i;
        }

        for(int j: sortArr) {
            System.out.print(j+ " ");      
        }
    }
}

// n + nlogn = nlogn