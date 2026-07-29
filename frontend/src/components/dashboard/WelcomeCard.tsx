import { Sparkles, Target } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { apiFetch } from "../../services/api";

export default function WelcomeCard() {
  const { user } = useAuth();

  const [interviews, setInterviews] = useState(0);
  const [loading, setLoading] = useState(true);

  const fullName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "User";

  useEffect(() => {
    let mounted = true;

    async function fetchStats() {
      try {
        setLoading(true);

        /*
         * IMPORTANT:
         * Do NOT use fetch() directly here.
         *
         * apiFetch() gets the current Supabase session
         * and automatically sends:
         *
         * Authorization: Bearer <supabase_access_token>
         */

        const response = await apiFetch(
          "/api/interview/stats"
        );

        if (!response.ok) {
          const errorText = await response.text();

          throw new Error(
            errorText ||
              "Failed to fetch interview statistics"
          );
        }

        const data = await response.json();

        console.log(
          "WelcomeCard interview stats:",
          data
        );

        if (mounted) {
          setInterviews(
            Number(data.total) || 0
          );
        }
      } catch (error) {
        console.error(
          "Welcome stats error:",
          error
        );

        if (mounted) {
          setInterviews(0);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchStats();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 p-8 shadow-xl">

      {/* Header */}
      <div className="flex items-center gap-3">

        <Sparkles
          className="text-yellow-300"
          size={28}
        />

        <h2 className="text-3xl font-bold text-white">
          Welcome Back, {fullName} 👋
        </h2>

      </div>


      {/* Description */}
      <p className="mt-4 max-w-2xl text-cyan-100">
        Continue preparing for your dream job.
        Practice AI interviews, improve your resume,
        solve coding challenges, and track your
        progress—all from one professional dashboard.
      </p>


      {/* Interview Progress */}
      <div className="mt-6 flex items-center gap-4 rounded-2xl bg-black/20 p-4">

        <Target
          className="text-white"
          size={26}
        />

        <div>

          <p className="text-sm text-cyan-100">
            Interview Progress
          </p>

          <p className="text-xl font-bold text-white">

            {loading
              ? "Loading..."
              : `${interviews} AI ${
                  interviews === 1
                    ? "Interview"
                    : "Interviews"
                } Completed`
            }

          </p>

        </div>

      </div>

    </div>
  );
}