class HelloWorld {
    public static int[] fillLPS(String str) {
        int l = str.length();
        int[] lps = new int[l];
        lps[0] = 0;
        int i=0;
        int j=1;
        while(j<l){
            if(str.charAt(i) == str.charAt(j)){
                lps[j] = i+1;
                ++i;
                ++j;
            } else {
                if(i==0){
                    lps[j] = 0;
                    ++j;
                } else {
                    i = lps[i-1];
                }
            }
        }
        return lps;
    }
    
    public static void main(String[] args) {
        String str = "abbabb";
        int[] lps = fillLPS(str);
        for(int a: lps){
            System.out.println(a);
        }
    }
}