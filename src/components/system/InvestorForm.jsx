import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function InvestorForm() {
  return (
    <form
    action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
          method="POST"
      className="space-y-8 w-full bg-white p-5 rounded-xl"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="fullName"
          required
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          required
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="investmentAmount">
          How much would you like to invest?
        </Label>
        <Select
          
        >
          <SelectTrigger>
            <SelectValue placeholder="Select investment amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10000-50000">$10,000 - $50,000</SelectItem>
            <SelectItem value="50001-100000">$50,001 - $100,000</SelectItem>
            <SelectItem value="100001-500000">$100,001 - $500,000</SelectItem>
            <SelectItem value="500001+">$500,001+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Are you willing to negotiate the stake?</Label>
        <RadioGroup defaultValue="yes">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="negotiable-yes" />
            <Label htmlFor="negotiable-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="negotiable-no" />
            <Label htmlFor="negotiable-no">No</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Switch id="accredited" />
          <Label htmlFor="accredited">I am an accredited investor</Label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Investment Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          placeholder="Please describe your investment experience and any relevant background."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="questions">Questions or Comments</Label>
        <Textarea
          id="questions"
          name="questions"
          placeholder="Do you have any questions or additional comments?"
        />
      </div>

      <Button type="submit" className="w-full">
        submit
      </Button>
    </form>
  );
}
