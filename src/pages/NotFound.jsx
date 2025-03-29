import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
            <Card className="text-center shadow-lg max-w-lg">
                <CardHeader>
                    <CardTitle>
                        404 Not Found
                    </CardTitle>

                    <p>
                        The page you are looking for does not exist
                    </p>
                </CardHeader>

                <CardContent>
                    <Button 
                        className="mt-4"
                        variant="outline"
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}