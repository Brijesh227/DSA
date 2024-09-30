class LCM {
    public static void main(String[] args) {
        int[] arr = {8,12,4,6}; // 24
        int n = arr.length;
        int ans = 1;
        int k=2;
        while(true){
            int oc = 0;
            int p = 0;
            for(int i=0;i<n;++i){
                if(arr[i] == 1){
                    ++oc;
                } else if(arr[i]%k == 0){
                    arr[i] = arr[i]/k;
                    ++p;
                }
            }
            if(oc == n){
                break;
            }
            if(p>0){
                ans = ans * k;
            } else {
                ++k;
            }
        }
        System.out.println("Ans is "+ans);
    }
}