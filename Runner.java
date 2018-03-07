
// Ok so this name *does* have to match file name:
public class Runner {

    public static void main(String[] args) {
        int[] nums = new int[1000000];
        long start = System.currentTimeMillis();
        // Ok must be double quotes:
        for (int i=0; i < 1000; i++) {
            for (int j=0; j < 1000; j++) {
                nums[i] = i;
            }
        }
        long end = System.currentTimeMillis();

        System.out.print(end - start);
        System.out.println("  ");
    }

}
